import React, { useState, useEffect } from 'react';
import rick_and_morty_api from './utils/API';

const ASCENDING = 'ascending';
const DESCENDING = 'descending';

function App() {
	const [ characters, setCharacters ] = useState([]);
	useEffect(() => {
		rick_and_morty_api.fetchCharacters().then((result) => {
			setCharacters(result.results);
		});
	}, []);

	const sortCharacters = (order, field) => {
		const sortedCharacters = characters.slice(0).sort((a, b) => {
			if (order === ASCENDING) {
				return a[field].localeCompare(b[field]);
			}
			return b[field].localeCompare(a[field]);
		});
		setCharacters(sortedCharacters);
	};

	return (
		<div>
			<div className="jumbotron jumbotron-fluid bg-info text-white">
				<div className="container">
					<h1 className="display-4 text-center">Rick and Morty Character Directory</h1>
					<p className="lead text-center">A searchable list of characters on Rick and Morty</p>
				</div>
			</div>
			<table className="table table-striped table-dark">
				<thead>
					<tr>
						<th className="text-center" scope="col">
							<h1>
								Name{' '}
								<span
									onClick={() => {
										sortCharacters(ASCENDING, 'name');
									}}
								>
									🔺
								</span>
								<span
									onClick={() => {
										sortCharacters(DESCENDING, 'name');
									}}
								>
									🔻
								</span>
							</h1>
						</th>
						<th className="text-center" scope="col">
							<h1>
								Image{' '}
								<span
									onClick={() => {
										sortCharacters(ASCENDING, 'name');
									}}
								>
									🔺
								</span>
								<span
									onClick={() => {
										sortCharacters(DESCENDING, 'name');
									}}
								>
									🔻
								</span>
							</h1>
						</th>
						<th className="text-center" scope="col">
							<h1>
								Species{' '}
								<span
									onClick={() => {
										sortCharacters(ASCENDING, 'species');
									}}
								>
									🔺
								</span>
								<span
									onClick={() => {
										sortCharacters(DESCENDING, 'species');
									}}
								>
									🔻
								</span>
							</h1>
						</th>
						<th className="text-center" scope="col">
							<h1>
								Status{' '}
								<span
									onClick={() => {
										sortCharacters(ASCENDING, 'status');
									}}
								>
									🔺
								</span>
								<span
									onClick={() => {
										sortCharacters(DESCENDING, 'status');
									}}
								>
									🔻
								</span>
							</h1>
						</th>
					</tr>
				</thead>
				<tbody>
					{characters.map((c) => (
						<tr key={c.id}>
							<td className="text-center">{c.name}</td>
							<td>
								<div class="text-center">
									<img src={c.image} />
								</div>
							</td>
							<td className="text-center">{c.species}</td>
							<td className="text-center">{c.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
