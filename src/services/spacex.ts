import { type APISpaceXResponse, type Doc } from '../interfaces/api.ts';

export const getLatestsLaunches = async () => {
	const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({
			query: {},
			options: {
				sort: {
					date_utc: 'asc',
				},
				limit: 10,
				pagination: true,
				page: Math.random() * 21,
			},
		}),
	});

	const { docs: launches } = (await res.json()) as APISpaceXResponse;
	return launches;
};

export const getLaunchById = async ({ id }: { id: string }) => {
	const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

	const launch = (await res.json()) as Doc;
	console.log(launch);
	return launch;
};
