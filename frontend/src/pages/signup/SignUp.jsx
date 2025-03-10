import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-white">
					Sign Up <span className="text-blue-500">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<InputField label="Full Name" type="text" placeholder="John Doe" value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
					<InputField label="Username" type="text" placeholder="johndoe" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
					<InputField label="Password" type="password" placeholder="Enter Password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
					<InputField label="Confirm Password" type="password" placeholder="Confirm Password" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link to={"/login"} className="text-red-500 text-sm hover:underline hover:text-blue-600 hover-animate mt-2 inline-block text-white">
						Already have an account?
					</Link>

					<div>
						<button className="btn btn-block btn-sm mt-2 border border-slate-700 text-white" disabled={loading}>
							{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

// ✅ Reusable Input Component
const InputField = ({ label, type, placeholder, value, onChange }) => (
	<div>
		<label className="label p-2">
			<span className="text-base label-text text-white">{label}</span>
		</label>
		<input type={type} placeholder={placeholder} className="w-full input input-bordered h-10" value={value} onChange={onChange} />
	</div>
);

// ✅ GenderCheckbox Component (Inside the same file)
const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex gap-4 mt-2">
			<Checkbox label="Male" value="male" selectedGender={selectedGender} onChange={onCheckboxChange} />
			<Checkbox label="Female" value="female" selectedGender={selectedGender} onChange={onCheckboxChange} />
		</div>
	);
};

// ✅ Reusable Checkbox Component
const Checkbox = ({ label, value, selectedGender, onChange }) => (
	<label className={`label gap-2 cursor-pointer text-white ${selectedGender === value ? "text-blue-500" : ""}`}>
		<span>{label}</span>
		<input type="checkbox" className="checkbox border-slate-900" checked={selectedGender === value} onChange={() => onChange(value)} />
	</label>
);

export default SignUp;
