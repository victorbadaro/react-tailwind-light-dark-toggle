import { useEffect, useState } from 'react';

export function DarkModeSwitch() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className="flex items-center justify-center">
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					type="checkbox"
					checked={darkMode}
					onChange={toggleDarkMode}
					className="sr-only peer"
				/>
				<div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-blue-500 dark:bg-gray-600 peer-checked:dark:bg-blue-500 transition-colors duration-300"></div>
				<div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-6"></div>
			</label>
			<span className="ml-3 text-gray-700 dark:text-gray-300">
				{darkMode ? 'Dark Mode' : 'Light Mode'}
			</span>
		</div>
	);
}
