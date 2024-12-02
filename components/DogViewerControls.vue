<script setup lang="ts">
interface Props {
    loading: boolean;
    breeds: string[];
}

interface Emits {
    (e: "newImage"): void;
}

defineProps<Props>();
defineEmits<Emits>();

const selectedBreed = defineModel<string>();
</script>

<template>
    <UContainer class="flex gap-5">
        <USelect
            :disabled="loading"
            v-model="selectedBreed"
            :options="breeds"
        />
        <UButton :loading="loading" @click="$emit('newImage')">
            Load New Image
        </UButton>
    </UContainer>
</template>
