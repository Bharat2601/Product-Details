export interface ProductDataTypes {
    id: string,
    title:string,
    price:number,
    description: string,
    category: string,
    image: string,
    rating:string  
}

export class signupModel{
    fullname : string = '';
    email: string ='';
    password : string='';
    mobile: string='';
    id: number=0;
}