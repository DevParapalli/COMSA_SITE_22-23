export interface db_registration {
    id?: number
    created_at: Date | string
    name: string
    email: string
    education: string
    event: string
    amount: number
    status: boolean
    team: string[]
    rzp_pid?: string
    rzp_oid?: string
    rzp_sig?: string
    phone: string
}