<template>
    <body style="margin: 0">
        <a-layout style="min-height: 100vh;">
            <!-- 左侧导航区域 -->
            <a-layout-sider
                v-if="!isMobile"
                collapsible
                :collapsed="collapsed"
                @collapse="onCollapse"
                breakpoint="lg"
                :collapsedWidth="isMobile ? 0 : 80"
            >
                <div class="logo" />
                <a-menu theme="dark" mode="inline" defaultSelectedKeys="1">
                    <a-menu-item key="1">
                        <a-icon type="user" />
                        <span>导航一</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <a-icon type="video-camera" />
                        <span>导航二</span>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <a-icon type="upload" />
                        <span>导航三</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>

            <!-- 抽屉式导航 -->
            <a-drawer
                v-if="isMobile"
                title="导航菜单"
                placement="left"
                :visible="drawerVisible"
                @close="drawerVisible = false"
            >
                <a-menu theme="dark" mode="inline" defaultSelectedKeys="1">
                    <a-menu-item key="1">
                        <a-icon type="user" />
                        <span>导航一</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <a-icon type="video-camera" />
                        <span>导航二</span>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <a-icon type="upload" />
                        <span>导航三</span>
                    </a-menu-item>
                </a-menu>
            </a-drawer>

            <!-- 主内容区域 -->
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                        <a-button
                            type="text"
                            icon="menu"
                            @click="toggleDrawer"
                            v-if="isMobile"
                        />
                        <span style="font-size: 18px; margin-left: 16px;">Header</span>
                    </div>
                </a-layout-header>
                <a-layout-content style="margin: 16px">
                    <NuxtPage />
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    Footer
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </body>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'DefaultLayout',
    setup() {
        const isMobile = ref(false);
        const drawerVisible = ref(false);
        const collapsed = ref(false);

        const checkScreenSize = () => {
            isMobile.value = window.innerWidth < 768;
        };

        const toggleDrawer = () => {
            drawerVisible.value = !drawerVisible.value;
        };

        const onCollapse = (collapsedStatus) => {
            collapsed.value = collapsedStatus;
        };

        onMounted(() => {
            checkScreenSize();
            window.addEventListener('resize', checkScreenSize);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', checkScreenSize);
        });

        return {
            isMobile,
            drawerVisible,
            toggleDrawer,
            collapsed,
            onCollapse,
        };
    },
};
</script>

<style>
.logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}
</style>