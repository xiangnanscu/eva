<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-light mb-2">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src="/jahy.svg" alt="打造社区党建第一品牌" width="40"
            height="40" />江安社区党建</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink :class="getNavClass('users')" to="/users">管理员</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :class="getNavClass('community')" to="/community">社区</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :class="getNavClass('workers')" to="/workers">社区人员</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :class="getNavClass('reviews')" to="/reviews">评价</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink v-if="auth.user" :class="getNavClass('logout')" to="/logout">退出</NuxtLink>
              <NuxtLink v-else :class="getNavClass('login')" to="/login">登录</NuxtLink>
            </li>
            <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
        </li> -->
            <!-- <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> -->
          </ul>
          <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
        </div>
      </div>
    </nav>
    <x-alert v-if="globalError" type="danger">{{ globalError }}</x-alert>
    <x-alert v-if="globalMessage" type="info">{{ globalMessage }}</x-alert>
    <slot />
  </div>
</template>

<script setup>
const route = useRoute();
const globalError = useGlobalError();
const globalMessage = useGlobalMessage();
const auth = useAuth();

const getNavClass = (name) => {
  if (route.path.slice(1) == name) {
    return { "nav-link": true, active: true };
  } else {
    return {
      "nav-link": true,
    };
  }
};
</script>