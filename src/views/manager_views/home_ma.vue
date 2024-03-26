<template>
	<v-header />
	<v-sidebar />
	<div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">
		<v-tags></v-tags>
		<div class="content">
			<router-view v-slot="{ Component }">
				<transition name="move" mode="out-in">
					<keep-alive :include="tags.nameList">
						<component :is="Component"></component>
					</keep-alive>
				</transition>
			</router-view>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useSidebarStore } from '../../store/sidebar_ma';
import { useTagsStore } from '../../store/tags';
import vHeader from '../../components/header_ma.vue';
import vSidebar from '../../components/sidebar_ma.vue';
import vTags from '../../components/tags.vue';

const sidebar = useSidebarStore();
const tags = useTagsStore();
</script>
