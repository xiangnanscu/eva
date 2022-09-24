<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">社区党建</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
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
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
console.log(route.path)
const getNavClass = (name) => {
  if (route.path.slice(1) == name) {
    return { "nav-link": true, active: true }
  } else {
    return {
      "nav-link": true
    }
  }
}
</script>