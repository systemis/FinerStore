export interface SignUpDto {
  username: string; 
  name: string; 
  email: string; 
  password: string;
  avatar?: string | "https://boringavatars.com/?ref=onepagelove";
}