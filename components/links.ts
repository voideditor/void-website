export const discordLink = 'https://discord.gg/RSNjgaugJs'

// export const contributeLink = 'https://github.com/voideditor/void/blob/main/HOW_TO_CONTRIBUTE.md'
export const githubLink = 'https://github.com/voideditor/void#readme'
export const githubStarLink = 'https://github.com/voideditor/void'

export const support_email = 'hello@voideditor.com'
export const emailLink = `mailto:${support_email}`

export const waitlistLink = '/email'
export const changelogLink = '/changelog'
export const downloadLink = '/download-beta'

export const releaseLink = `https://github.com/voideditor/void/releases`

const downloadPrefix = `https://github.com/voideditor/void/releases/latest/download`
export const downloadOfOS = {
    mac: {
        // appleSilicon: `${downloadPrefix}/Void-Installer-darwin-arm64.dmg`,
        // intel: `${downloadPrefix}/Void-Installer-darwin-x64.dmg`,
        appleSilicon: `https://github.com/voideditor/binaries/releases/download/1.2.0.25104/Void.arm64.1.2.0.25104.dmg`,
        intel: `https://github.com/voideditor/binaries/releases/download/1.2.0.25104/Void.x64.1.2.0.25104.dmg`,
    },
    windows: {
        x64: `https://github.com/voideditor/binaries/releases/download/1.2.0.25104/VoidSetup-x64-1.2.0.25104.exe`,
        arm: `https://github.com/voideditor/binaries/releases/download/1.2.0.25104/VoidSetup-arm64-1.2.0.25104.exe`,
    },
    linux: {
        x64: `https://github.com/voideditor/binaries/releases/download/1.2.0.25104/Void-1.2.0.25104.glibc2.29-x86_64.AppImage`
    },
}
