#!/bin/bash

declare -a errors

# Find links returning error response codes like 4XX, 5XX, or 999.
# 
# bash check-links.sh | grep ERROR

exceptions='^(https://www.linkedin.com/company/huntcloud/|https://www.linkedin.com/in/[^/]+/)$'

for link in $(find docs -type f -iname "*.md" -print0 | xargs -0 grep -hEo "(http|https)://[a-zA-Z0-9./?=_%:-]*" | sort | uniq | grep -vE "${exceptions}" |  tr "\n" " "); do 
  #| xargs -I @ bash -c "[[ \"$(curl -s -o /dev/null -w '%{http_code}' @)\" == \"404\" ]] && echo '@ ⚠️' || echo '@ ✅' "
  echo -n "${link}: "
  output=$(curl -s -o /dev/null -w '%{http_code}' "${link}")
  echo -n "${output} "
  [[ "${output}" =~ ^([4-5][0-9][0-9]|999)$ ]] && (errors+=(${output}); echo '[ERROR] ⛔️') || echo '[OK] ✅'
done

unique_array=($(printf "%s\n" "${errors[@]}" | sort -u))

echo 1>&2
if (( ${#unique_array[@]} )); then
  echo "Error response codes were found: ${unique_array[@]}." 1>&2
  echo "${#errors[@]} broken links."
  exit 1
else
  echo "Success. All links look healthy." 1>&2
  exit 0
fi

