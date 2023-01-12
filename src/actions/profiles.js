export const RECEIVE_PROFILES = "RECEIVE_PROFILES";

export function receiveProfiles(profiles) {
  return {
    type: RECEIVE_PROFILES,
    profiles,
  };
}
