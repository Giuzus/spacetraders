export function withColorScheme(Story: any, context: any) {

    let { scheme } = context.globals;

    return <div>

        {(scheme === "light" || scheme === "both") &&
            <div>
                <Story />
            </div>
        }

        {scheme === "both" &&
            <hr />
        }

        {(scheme === "dark" || scheme === "both") &&
            <div className='dark'>
                <Story />
            </div>
        }

    </div >
}