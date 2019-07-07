# Time complexity O(n)
# Space complexity O(n)


def two_number_sum(array, target_sum):
    cached_nums = {}
    for num in array:
        target_num = target_sum - num
        if target_num in cached_nums:
            return sorted([num, target_num])
        cached_nums[num] = True
    return []
