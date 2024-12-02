interface DogBreedsApiResponse {
    status: "success" | "error";
    message: Record<string, string[]>;
}

export default async function useDogBreeds() {
    const { data, status, error, refresh } =
        await useFetch<DogBreedsApiResponse>(
            "https://dog.ceo/api/breeds/list/all",
            {
                pick: ["message"],
            },
        );

    const breeds = computed(() => {
        const message = data.value?.message;

        if (status.value !== "success" || !message) {
            return [];
        }

        return Object.keys(message);
    });

    return {
        breeds,
        error,
        refresh,
    };
}
