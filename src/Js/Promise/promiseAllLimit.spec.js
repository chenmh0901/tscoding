// 理解异步 Promise 并发限制 （就限制并发数）

function promiseAllLimit(tasks, limitcount) {
  return new Promise((resolve) => {
    let isPendingcount = 0
    const queueTask = tasks.map((item, index) => {
      {
        task: item, index
      }
    })
    const successTask = []

    if (tasks.length == 0) {
      resolve([])
      return
    }

    function req(task, index) {
      task().then((res) => {
        successTask[index] = res
        isPendingcount--

        // 如果队列中还有任务，继续执行 实现并发控制
        if (queueTask.length) {
          isPendingcount++
          const { task, index } = queueTask.shift()
          // 递归执行未完成的任务
          req(task, index)
        } else if (isPendingcount === 0) {
          resolve(successTask)
        }
      })
    }

    // 初始化并发请求 limitcount 个 初始化之后，剩下的任务会在 req 中继续执行
    // 通过 isPendingcount 控制并发数
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i]

      if (isPendingcount < limitcount) {
        req(task, i)
        isPendingcount++
        queueTask.shift()
      } else {
        break
      }
    }
  })
}
