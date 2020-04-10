import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

const LeafletMap = ({ position, zoom, iconImg, className }) => {
	if (typeof window !== 'undefined') {
		const icon = new L.Icon({
			iconUrl: iconImg,
			iconSize: new L.Point(150, 150),
		});

		return (
			<Map
				center={position}
				zoom={zoom}
				className={className}
				dragging={!L.Browser.mobile}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={position} icon={iconImg ? icon : null} />
			</Map>
		);
	}
	return null;
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
