import { useForm} from "react-hook-form"
import type { SubmitHandler, SubmitErrorHandler, FieldErrors } from "react-hook-form"
import { useState } from "react" 

type FormValues = {
  firstName: string
  lastName: string
  email: string
}

export default function Contanct() {
	
  const [formState, setFormState] = useState("Not Sent")
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data : FormValues) => { 
	console.log(data)
	setFormState("Sent")
	alert("sent your form")
  }
  const onError: SubmitErrorHandler<FormValues> = (errors: FieldErrors<FormValues>) =>
  console.log(errors)

  return (
	<>
		<h3>Contact</h3>
		<form onSubmit={handleSubmit(onSubmit, onError)}>
			First Name
			<input {...register("firstName")} /> <br/>
			Last Name 
			<input {...register("lastName")} /> <br/>
			Email 
			<input type="email" {...register("email")} /> <br/>
			{formState === "Sent" ? 
			<button type="submit" disabled>Sent</button>: 
			<button type="submit">Submit</button>}
			
		</form>
	</>
  )
}