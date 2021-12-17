<template>
<div class="container">
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputSubject" class="form-label">Subject</label>
    <select id="inputSubject" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputLevel" class="form-label">Level</label>
    <select id="inputLevel" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
</div>
</template>
