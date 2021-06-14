/**
 * Degrees to Radians
 */
export function deg_rad_(deg:number):number {
	return deg * (Math.PI / 180.0)
}
export {
	deg_rad_ as _deg_rad,
	deg_rad_ as _rad__deg,
}
