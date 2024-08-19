import { DarkModeSwitch } from './components/dark-mode-switch';

export function App() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
			<header className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
				Light/Dark Mode Toggle
			</header>

			<main className="text-center">
				<p className="mb-4 text-gray-600 dark:text-gray-300">
					Switch between Light and Dark mode using the toggle below.
				</p>
				<DarkModeSwitch />
			</main>
		</div>
	);
}
