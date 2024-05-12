<template>
  <div class="flex items-center justify-center pt-16">
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome back! Please enter your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-col space-y-1.5 mb-5">
          <Label for="username">Username</Label>
          <Input id="username" placeholder="Username" />
        </div>
        
        <div class="flex flex-col space-y-1.5">
          <Label for="password">Password</Label>
          <Input id="password" placeholder="Password" type="password" />
        </div>
      </CardContent>
      <CardFooter class="flex items-center justify-end">
        <Button @click="login">Login</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script lang="ts" setup>
async function login() {
  const data = await $fetch('/api/hello')

  console.log(data)
}
</script>