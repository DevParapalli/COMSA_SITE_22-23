export interface db_registration {
  id?: number;
  created_at: Date | string;
  name: string;
  email: string;
  education: string;
  event: string;
  amount: number;
  status: boolean;
  team: string[];
  rzp_pid?: string;
  rzp_oid?: string;
  rzp_sig?: string;
  phone: string;
  cf_id: string;
  cf_token: string;
  cf_status: string;
  rzp_status: string;
}
