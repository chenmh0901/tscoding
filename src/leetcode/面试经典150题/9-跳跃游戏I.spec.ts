/*
    - 如果某一个作为 起跳点 的格子可以跳跃的距离是 3，那么表示后面 3 个格子都可以作为 起跳点
    - 可以对每一个能作为 起跳点 的格子都尝试跳一次，把 能跳到最远的距离 不断更新
    - 如果可以一直跳到最后，就成功了
*/

/* eslint-disable prettier/prettier */
function canJump(nums: number[]): boolean {
    let maxDistance = 0

    for (let i = 0; i < nums.length; i++) {
        if (i > maxDistance) return false
        // eslint-disable-next-line prettier/prettier
        maxDistance = Math.max(maxDistance, i + nums[i])
    }
    return true
}

test('canJump', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true)
    expect(canJump([3, 2, 1, 0, 4])).toBe(false)
})
