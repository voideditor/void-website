export const discordLink = 'https://discord.gg/RSNjgaugJs'

export const contributeLink = 'https://github.com/voideditor/void/blob/main/CONTRIBUTING.md'
export const githubLink = 'https://github.com/voideditor/void#readme'
export const githubStarLink = 'https://github.com/voideditor/void'

export const support_email = 'hello@voideditor.com'
export const emailLink = `mailto:${support_email}`

export const waitlistLink = '/email'
export const changelogLink = '/changelog'
export const downloadLink = '/download-beta'

const latestTag = 'v1.0.0' // PROBABLY SHOULD NOT CHANGE THIS unless major update

export const releaseLink = `https://github.com/voideditor/void/releases/${latestTag}`


const downloadPrefix = `https://github.com/voideditor/void/releases/download/${latestTag}`
export const downloadOfOS = {
    mac: {
        appleSilicon: `${downloadPrefix}/Void-Installer-darwin-arm64.dmg`,
        intel: `${downloadPrefix}/Void-Installer-darwin-x64.dmg`,
    },
    windows: {
        x64: `${downloadPrefix}/Void-Installer-win32-x64.exe`,
    },
    linux: {
        x64: `${downloadPrefix}/Void-Installer-linux-x64.zip`
    },
}
