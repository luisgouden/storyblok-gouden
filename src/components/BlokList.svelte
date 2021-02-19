<script>
  import { editable } from "../directives";

  export let blok;
</script>

<style>
  .wrapper {
    width: 100%;
    display: flex;

    padding: 0.5rem;
    border-radius: 1rem;
    background: #fff;
    box-shadow: 20px 20px 60px #f0f0f0, -20px -20px 60px #ffffff;
  }
  img {
    max-height: calc(var(--unit) / 2);
    max-width: calc(var(--unit) / 2);
  }
  .skill {
    display: grid;
    justify-content: center;
    align-items: center;
  }
  p {
  }

  @media (min-width: 992px) {
    .wrapper {
      flex-direction: column;
    }

    .skill {
      display: grid;
      justify-content: start;
      align-items: center;
    }
  }
</style>

<div class="wrapper" use:editable={blok}>
  <img alt={blok.image.alt} src={blok.image.filename} />
  <div class="skill">
    <p>{blok.skill}</p>
  </div>
</div>
