async function postData<T>(url: string, data: T) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })

    return response.json()
  } catch (e) {
    console.log(e)
  }
}

export class BaseApi<Create, Get> {
  constructor(protected url: string) {}

  get(): Promise<Get[]> {
    return fetch(this.url).then((r) => r.json())
  }

  detail(id: string): Promise<Get> {
    return fetch(this.url + id).then((r) => r.json())
  }

  post(body: Create) {
    return postData(this.url, body)
  }
}
