import { create } from "zustand";

const useUseProfileStore = create((set) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({userProfile})
}))

export default useUseProfileStore