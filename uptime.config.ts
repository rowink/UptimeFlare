const pageConfig = {
  title: "Exisi's Status Page",
  links: [
    { link: 'https://github.com/Exisi', label: 'GitHub' },
    { link: 'https://exi.ink/', label: 'Blog' },
    { link: 'mailto:exi.simat@gmail.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 5,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      id: 'ink',
      name: '博客',
      method: 'GET',
      target: 'https://exi.ink',
      tooltip: 'where there is code, there is fun.'
    },
    {
      id: 'm',
      name: '笔记',
      method: 'GET',
      target: 'https://m.exi.ink',
      tooltip: 'magic book.'
    },
    {
      id: 'e',
      name: '想法',
      method: 'GET',
      target: 'https://e.exi.ink',
      tooltip: 'a blog about views.'
    },
    {
      id: 'software',
      name: '魔法实验室',
      method: 'GET',
      target: 'https://exi.software',
      tooltip: 'magic lab.'
    },
    {
      id: 'pic',
      name: '图床',
      method: 'GET',
      expectedCodes: [401],
      target: 'https://pic.exi.software/',
      tooltip: 'some pictrue for page background.'
    },
    {
      id: 'short',
      name: '短链',
      method: 'GET',
      target: 'https://short.exi.software/',
      tooltip: 'short link or word.'
    },
    {
      id: 'note',
      name: '云记事本',
      method: 'GET',
      target: 'https://note.exi.software',
      tooltip: 'short link or word.'
    },
    {
      id: 'kode_snaps',
      name: 'Kodesnaps',
      method: 'GET',
      target: 'https://code.exi.software/new',
      tooltip: 'share your code snippet.'
    },
    {
      id: 'txt_able',
      name: 'Txtable',
      method: 'GET',
      target: 'https://txtable.exi.software/',
      tooltip: 'set table only by text.'
    },
    {
      id: 'qrcode',
      name: 'QRcode',
      method: 'GET',
      target: 'https://qrcode.exi.software/',
      tooltip: 'a simple qrcode tool.'
    },
    {
      id: 'u-text',
      name: 'UText',
      method: 'GET',
      target: 'https://txt.exi.software/',
      tooltip: 'character deduplication tool.'
    },
    {
      id: 'devkit',
      name: 'Devkit',
      method: 'GET',
      target: 'https://devkit.exi.software/',
      tooltip: 'some development tool collection.'
    },
    {
      id: 'designkit',
      name: 'Designkit',
      method: 'GET',
      target: 'https://designkit.exi.software/',
      tooltip: 'some design tool collection.'
    },
    {
      id: 'creatorkit',
      name: 'Creatorkit',
      method: 'GET',
      target: 'https://creatorkit.exi.software/',
      tooltip: 'some creator tool collection.'
    },
    {
      id: 'pintree',
      name: 'Pintree',
      method: 'GET',
      target: 'https://mark.exi.software/',
      tooltip: 'online bookmark.'
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://ntfy.sh/rowink_nfty",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
