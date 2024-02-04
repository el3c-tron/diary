import { create } from "zustand"

type SearchStore = {
    isOpen: boolean;
    onOpen: () => void
    onClose: () => void
    toogle: () => void
}

const useSearch = create<SearchStore>((set, get) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
    toogle: () => set({isOpen : !get().isOpen}),
}))

export default useSearch;