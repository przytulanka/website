import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LeafletMap = ({ position, zoom, iconImg, className }) => {
	const [isClient, setIsClient] = useState(false);
	const [mapComponents, setMapComponents] = useState(null);
	const [L, setL] = useState(null);

	useEffect(() => {
		setIsClient(true);

		if (typeof window !== 'undefined') {
			const loadComponents = async () => {
				try {
					const [leaflet, reactLeaflet] = await Promise.all([
						import('leaflet'),
						import('react-leaflet'),
					]);
					setL(leaflet.default);
					setMapComponents(reactLeaflet);
				} catch (error) {
					console.error('Error loading map components:', error);
				}
			};
			loadComponents();
		}
	}, []);

	if (!isClient || !mapComponents || !L) {
		return (
			<div
				style={{
					height: '400px',
					background: '#f0f0f0',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				Loading map...
			</div>
		);
	}

	const { MapContainer, TileLayer, Marker } = mapComponents;

	let icon = null;
	if (iconImg) {
		try {
			icon = new L.Icon({
				iconUrl: iconImg,
				iconSize: new L.Point(150, 150),
			});
		} catch (error) {
			console.error('Error creating icon:', error);
		}
	}

	return (
		<MapContainer
			center={position}
			zoom={zoom}
			className={className}
			style={{ height: '400px', width: '100%' }}
			scrollWheelZoom={false}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker position={position} icon={icon} />
		</MapContainer>
	);
};

LeafletMap.propTypes = {
	position: PropTypes.arrayOf(PropTypes.number).isRequired,
	zoom: PropTypes.number,
	iconImg: PropTypes.string,
	className: PropTypes.string,
};

LeafletMap.defaultProps = {
	zoom: 16,
	iconImg: null,
	className: null,
};

export default LeafletMap;
