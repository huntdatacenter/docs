---
title: Performance
permalink: /troubleshooting/performance
sidebarDepth: 1
---

# Troubleshooting performance

## Monitoring Resources

For interactive monitoring of cpu and memory usage we recommend
[HTOP](https://docs.hdc.ntnu.no/working-in-your-lab/technical-tools/htop/)

### Is my process hitting memory issues?

The [time](http://man7.org/linux/man-pages/man1/time.1.html) command
runs the specified program command with the given arguments.
When command finishes, time writes a message to standard
error giving timing statistics about this program run.

```
time -v your-command
....
        Command being timed: "ls /"
        User time (seconds): 0.00
        System time (seconds): 0.01
        Percent of CPU this job got: 250%
        Elapsed (wall clock) time (h:mm:ss or m:ss): 0:00.00
        Average shared text size (kbytes): 0
        Average unshared data size (kbytes): 0
        Average stack size (kbytes): 0
        Average total size (kbytes): 0
        Maximum resident set size (kbytes): 0
        Average resident set size (kbytes): 0
        Major (requiring I/O) page faults: 0
        Minor (reclaiming a frame) page faults: 315
        Voluntary context switches: 2
        Involuntary context switches: 0
        Swaps: 0
        File system inputs: 0
        File system outputs: 0
        Socket messages sent: 0
        Socket messages received: 0
        Signals delivered: 0
        Page size (bytes): 4096
        Exit status: 0
```

## Benchmarking code

Using time measurements within your code...

## Profiling

Using profiling tools to identify functions that allocate highest amount of
a resource (time, cpu, mem, etc.) within your code or 3-rd party libraries
that you are using. Such tools may be also useful in finding memory leaks.
If you are interested in deep insight following this way we recommend
to get familiar with [Flame graphs](http://www.brendangregg.com/flamegraphs.html).

Examples for python profilers are:

- [py-spy](https://github.com/benfred/py-spy) - top-like sampling profiler (low overhead, non-interuptive, flamegraphs)
- [scalene](https://github.com/emeryberger/scalene) - a high-performance CPU and memory profiler for Python.
- [vprof](https://github.com/nvdv/vprof) - Visual Python profiler.
