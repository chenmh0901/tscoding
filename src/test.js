// 3. 并发请求

function fetchDomain(domain) {
  return fetch(`/cdn/domain/${domain}`)
}

const domains = ['https://qiniu.com', '...']

function makeRequest(domains, limit) { }
