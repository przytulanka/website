function dataFilter(data, collectionName, type = 'title') {
	if (!data || !data.frontmatter[collectionName]) return [];
	const filteredData = data.frontmatter[collectionName].filter(
		el => el[type],
	);
	return filteredData;
}

export default dataFilter;
