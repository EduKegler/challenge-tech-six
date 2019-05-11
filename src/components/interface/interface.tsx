export interface Account {
    viewer: {
        login: string
        name: string
        avatarUrl: string
        followers: {
            nodes: Follower[]
        }
        following: Following
        gists: Gists
        organizations: {
            nodes: Organization[]
        }
        repositories: {
            nodes: Repository[]
        }
    }
}

export interface Following {
    totalCount: number
}

export interface Gists {
    totalCount: number
}

export interface Follower {
    avatarUrl: string
    name: string
    email: string
}

export interface Repository {
    name: string
}

export interface Organization {
    avatarUrl: string
    name: string
    email: string
}