import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId:"59smjhy4",
  dataset: 'production',
  apiVersion: 'v1',
  token: "sktDWQ0LXiob1soTZotiUNgT9RmiGevDqiu15ZH1fPbuRl0HFm76dYh4eQ81fbiuL7l3yjzYFgpaFYnDBzixwBjzHDAiQQKOA39I0QLT3S4QWdCHu6NZPloBCsmJeoC1f8qB8qHd5pKhBLmjDjdgBHSzalTCU1IDYW9aVNpsBjZbPAq0tPXq",
  useCdn: false,
})
