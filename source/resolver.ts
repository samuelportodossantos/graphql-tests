export const textComponent = {
    name: "TextComponent",
    description: "A component that send a text message"
}

export const mediaComponent = {
    name: "MediaComponent",
    description: "A component that send a media"
}

const flow = {
    description: "MyFlow1",
    components: [
        textComponent,
        mediaComponent
    ]
}

const resolvers = {
    Query: {
        flow: () => {
            return flow
        }
    }
}

export default resolvers
