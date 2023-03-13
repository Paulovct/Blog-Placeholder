import axios from "axios";


const BASE = axios.create({
	baseURL:"https://jsonplaceholder.typicode.com"
}) 

export const api = {
	getAllPosts:async ()=>{
		
		let response = await BASE.get("/posts");
		return response.data;

	},
	addNeewPost: async (title:string , body:string , userId:number)=>{
		
		let response = await BASE.post("/posts" , {
			title,body,userId
		});
		return response.data;

	}
}