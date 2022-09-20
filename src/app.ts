export const ssr = {
    beforeRenderServer: async ({

    }) => {
        // Note: Since ssr is used, do not use the browser method where it will be rendered server-side
        // simple ssr polyfill
        // @ts-ignore
        global.window = { 
        }
        // @ts-ignore
        global.localStorage = {
            getItem:()=>{
                return null;
            }
        }
    }
  }