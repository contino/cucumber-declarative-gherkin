declare global {
    namespace WebdriverIO {
        interface Browser {
            browserCustomCommand: (arg: any) => void
        }

        interface MultiRemoteBrowser {
            browserCustomCommand: (arg: any) => void
        }

        interface Element {
            elementCustomCommand: (arg: any) => number
        }
    }
}
