import yaml
import logging
import sys

log = logging.getLogger(__name__)
log.setLevel(logging.INFO)
stream_handler = logging.StreamHandler(stream=sys.stderr)
stream_formatter = logging.Formatter(
    '%(asctime)s.%(msecs)03d - %(levelname)s: %(message)s', datefmt="%Y-%m-%d %H:%M:%S")  # noqa
stream_handler.setFormatter(stream_formatter)
log.addHandler(stream_handler)

log.info('Started tests')

FILENAME = 'service_desk.yml'

try:
    with open(FILENAME, 'r') as f:
        data = f.read()
except Exception as e:
    log.error(e)
    raise Exception(f"Failed to open file: {FILENAME}")

try:
    config = yaml.safe_load(data)
except Exception as e:
    log.error(e)
    raise Exception(f"Invalid yaml file: {FILENAME}")

# print(config.keys())

dvdr = 70 * '-' + '\n'

for key, item in config.items():
    for var in ['title', 'template', 'fields', 'requirements']:
        assert item.get(var) not in [None, ""], (
            f"'{key}' is missing a key '{var}'\n{dvdr}{key}: {yaml.dump(item)}"
        )
    for field in item['fields']:
        for var in ['label', 'key', 'field']:
            assert field.get(var), (
                f"'{key}' field is missing a key '{var}'\n{dvdr}{yaml.dump(item)}"  # noqa
            )
            assert isinstance(field.get(var), str), (
                f"'{key}' field value for '{var}' is not a string\n{dvdr}{yaml.dump(item)}"  # noqa
            )
    for var in ['subject', 'body']:
        template = item['template']
        assert template.get(var), (
            f"'{key}' template is missing a key '{var}'\n{dvdr}{yaml.dump(template)}"  # noqa
        )
        assert isinstance(template.get(var), str), (
            f"'{key}' template value for '{var}' is not a string\n{dvdr}{yaml.dump(template)}"  # noqa
        )

log.info('Finished tests')
