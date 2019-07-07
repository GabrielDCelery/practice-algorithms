# Time complexity O(n)
# Space complexity O(1)


def get_nth_fib(nth_fib):
    target_index = nth_fib - 1
    fib_slice = [0, 1, 1]

    if target_index < 3:
        return fib_slice[target_index]

    current_index = 2
    while current_index < target_index:
        current_index += 1
        fib_slice[0] = fib_slice[1]
        fib_slice[1] = fib_slice[2]
        fib_slice[2] = fib_slice[0] + fib_slice[1]
    return fib_slice[2]
