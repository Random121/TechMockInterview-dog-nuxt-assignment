<script setup lang="ts">
import { useDogBreeds } from "#build/imports";
import DogViewerControls from "~/components/DogViewerControls.vue";

interface DogImageApiResponse {
    status: "success" | "error";
    message: string;
}

const { breeds } = await useDogBreeds();

const selectedBreed = ref<string>(breeds.value[0]);

const { data, status, refresh } = await useFetch<DogImageApiResponse>(
    () => `https://dog.ceo/api/breed/${selectedBreed.value}/images/random`,
    {
        pick: ["message"],
    },
);

const imageUrl = computed(() => data.value?.message);
</script>

<template>
    <UContainer class="flex flex-col items-center gap-5 mt-5">
        <DogViewerControls
            v-model="selectedBreed"
            :loading="status === 'pending'"
            :breeds="breeds"
            @new-image="refresh()"
        />
        <NuxtImg v-if="status === 'success'" :src="imageUrl" height="500" />
        <UAlert
            v-else-if="status === 'error'"
            title="Failed to load image!"
            color="red"
            variant="subtle"
            class="max-w-96"
        />
    </UContainer>
</template>
