const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex gap-4">
			<div className="form-control">
				<label
					className={`label gap-2 cursor-pointer transition-colors ${
						selectedGender === "male" ? "text-blue-600 font-semibold" : "text-gray-600"
					}`}
				>
					<span className="label-text">Male</span>
					<input
						type="checkbox"
						className="checkbox border-blue-600 checked:bg-blue-600"
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className="form-control">
				<label
					className={`label gap-2 cursor-pointer transition-colors ${
						selectedGender === "female" ? "text-blue-600 font-semibold" : "text-gray-600"
					}`}
				>
					<span className="label-text">Female</span>
					<input
						type="checkbox"
						className="checkbox border-blue-600 checked:bg-blue-600"
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;
