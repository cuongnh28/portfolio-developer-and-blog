<script lang="ts" setup>
import { ref } from 'vue'

const { current } = useAwesomeScreen()

const phrases = [`I'm Vito`, `I learn, I develop...`]
const router = useRouter()
const currentPhraseIndex = ref(0)
const currentCharacterIndex = ref(0)
const currentPhrase = ref<string>(`I'm Vito`)
const isDeleting = ref(false)

function loop() {
  const currentPhraseText = phrases[currentPhraseIndex.value]

  if (!isDeleting.value) {
    currentPhrase.value += currentPhraseText[currentCharacterIndex.value]
    currentCharacterIndex.value++
  } else {
    currentPhrase.value = currentPhrase.value.slice(0, -1)
    currentCharacterIndex.value--
  }

  if (currentCharacterIndex.value === currentPhraseText.length) {
    isDeleting.value = true
  }

  if (currentCharacterIndex.value === 0) {
    currentPhrase.value = ''
    isDeleting.value = false
    currentPhraseIndex.value++
    if (currentPhraseIndex.value === phrases.length) {
      currentPhraseIndex.value = 0
    }
  }

  const spedUp = Math.random() * (80 - 50) + 150
  const normalSpeed = Math.random() * (300 - 250) + 50
  const time = isDeleting.value ? spedUp : normalSpeed
  setTimeout(loop, time)
}
setTimeout(() => {
  currentPhrase.value = ''
  loop()
}, 3000)
const redirectUrl = (url: string, isOutApp: boolean) => {
  if (!url) {
    return
  }
  if (!isOutApp) {
    router.push({ path: url })
  } else {
    window.open(url)
  }
}
</script>

<template>
  <LayoutPageWrapper class="max-w-6xl m-auto">
    <LayoutPageSection>
      <!-- About me -->
      <section>
        <div class="content-wrapper pt-2">
          <div class="relative">
            <div class="relative z-10">
              <div class="w-full lg:w-3/5">
                <div
                  class="mb-1 flex items-center gap-1 text-2xl text-slate-600 md:mb-0 md:gap-2 md:text-4xl dark:text-slate-400"
                >
                  hi!
                  <div
                    style="
                      opacity: 1;
                      transform-origin: right center;
                      transform: none;
                    "
                    class="w-8 md:w-16"
                  >
                    <img
                      alt="hi"
                      width="64"
                      height="64"
                      format="webp"
                      loading="lazy"
                      src="/images/hi.webp"
                      style="color: transparent"
                    />
                  </div>
                </div>
                <span class="text-slate-700 dark:text-slate-300"
                  ><span
                    class="mb-1 block text-[2.1rem] font-[1000] leading-none md:text-6xl"
                  >
                    {{ currentPhrase }}&nbsp;
                  </span>
                </span>
              </div>
              <div class="grid-cols-1 md:grid-cols-2 grid md:flex">
                <div
                  class="lg:w-1/3 w-full text-base text-slate-600 md:text-xl pt-5 dark:text-slate-400 col-span-1"
                >
                  <!-- Software Engineer -->
                  <div>
                    <p>
                      A
                      <strong class="text-slate-700 dark:text-slate-300"
                        >Software Engineer</strong
                      >
                    </p>
                    <p
                      class="text-base md:text-lg font-normal text-gray-700 dark:text-white"
                    >
                      <span> I'm always eager to expand my skill</span
                      ><span> set and stay current</span>
                      <span> with the latest technology trends.</span>
                    </p>
                    <p
                      class="text-base md:text-lg font-normal text-gray-700 dark:text-white"
                    >
                      <i>"I’ll make him an offer he can’t refuse"</i>
                    </p>
                  </div>
                  <!-- Contract -->
                  <div class="mt-3 md:mt-5">
                    <div>
                      <div class="mb-3 flex space-x-4">
                        <NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          target="_blank"
                          alt="Nguyễn Hồng Cường - Blog's của tôi"
                          name="Nguyễn Hồng Cường - Blog's của tôi"
                          rel="noopener noreferrer"
                          to="mailto:hongcuongcl98@gmail.com"
                          ><span class="sr-only">mail</span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                          >
                            <title>Mail</title>
                            <path
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                            ></path>
                            <path
                              d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                            ></path></svg></NuxtLink
                        ><NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="Nguyễn Hồng Cường - Blog's của tôi"
                          name="Nguyễn Hồng Cường - Blog's của tôi"
                          to="https://github.com/cuongnh28"
                          ><span class="sr-only">github</span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                          >
                            <title>GitHub</title>
                            <path
                              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                            ></path></svg
                        ></NuxtLink>
                        <NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          rel="noopener noreferrer"
                          alt="Nguyễn Hồng Cường - Blog's của tôi"
                          name="Nguyễn Hồng Cường - Blog's của tôi"
                          to="#"
                          ><span class="sr-only">x</span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                          >
                            <title>X</title>
                            <path
                              d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                            ></path></svg
                        ></NuxtLink>
                        <NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          rel="noopener noreferrer"
                          alt="Nguyễn Hồng Cường - Blog's của tôi"
                          name="Nguyễn Hồng Cường - Blog's của tôi"
                          to="https://www.linkedin.com/in/cuongnh28/"
                          ><span class="sr-only">linkedin</span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                          >
                            <title>Linkedin</title>
                            <path
                              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            ></path></svg></NuxtLink
                        ><NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          target="_blank"
                          alt="Nguyễn Hồng Cường - Blog's của tôi"
                          name="Nguyễn Hồng Cường - Blog's của tôi"
                          rel="noopener noreferrer"
                          to="https://www.facebook.com/cuongnh28/"
                          ><span class="sr-only">facebook</span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                          >
                            <title>Facebook</title>
                            <path
                              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                            ></path></svg></NuxtLink
                        ><NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          target="_blank"
                          rel="noopener noreferrer"
                          name="Nguyễn Hồng Cường - Blog's của tôi"
                          alt="Nguyễn Hồng Cường - Blog's của tôi"
                          to="https://www.youtube.com/@cuongnguyenhong9898"
                          ><span class="sr-only">youtube</span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                          >
                            <title>Youtube</title>
                            <path
                              d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"
                            ></path></svg
                        ></NuxtLink>
                      </div>
                    </div>
                  </div>
                  <!--   Tech stack/tools -->
                  <div class="mt-4 lg:mt-8">
                    <div class="w-full">
                      <p
                        class="mb-2.5 text-sm text-slate-600 dark:text-slate-400"
                        style="opacity: 1; transform: none"
                      >
                        Tech stack/tools:
                      </p>
                      <ul
                        class="w-full flex flex-wrap items-center gap-3.5 text-slate-500 dark:text-slate-500"
                      >
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#61DAFB]"
                          >
                            <!-- Java SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/java-logo-svgrepo-com.svg"
                              alt="java"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>

                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Python SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/python-svgrepo-com.svg"
                              alt="python"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#3178C6]"
                          >
                            <!-- Spring icon -->

                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/spring-icon-svgrepo-com.svg"
                              alt="spring"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#61DAFB]"
                          >
                            <!-- Kafka icon -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/kafka-svgrepo-com.svg"
                              alt="kafka"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#06B6D4]"
                          >
                            <!-- Linux SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/linux-svgrepo-com.svg"
                              alt="linux"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#0055FF]"
                          >
                            <!-- Git SVG -->

                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/git.svg"
                              alt="git"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#61DAFB]"
                          >
                            <!-- DrawIO SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/drawio-svgrepo-com.svg"
                              alt="drawio"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]"
                          >
                            <!-- IntelliJ SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/intellij-idea-svgrepo-com.svg"
                              alt="intellij"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- VsCode SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/vscode.svg"
                              alt="vscode"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Jira SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/jira.svg"
                              alt="jira"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- PostGres SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/postgresql-svgrepo-com.svg"
                              alt="Laravel"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- MySQL SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/mysql-svgrepo-com.svg"
                              alt="mysql"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>

                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Postman SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/postman.svg"
                              alt="Postman"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>

                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Elastic SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/elastic-svgrepo-com.svg"
                              alt="elastic"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- KongA SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/kong-svgrepo-com.svg"
                              alt="kong"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Docker -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/docker-svgrepo-com.svg"
                              alt="docker"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- K8s-->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/kubernetes-svgrepo-com.svg"
                              alt="k8s"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Jenkins SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/jenkins-svgrepo-com.svg"
                              alt="jenkins"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- GitlabCI SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/gitlab-svgrepo-com.svg"
                              alt="gitlabCI"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="pointer-events-none absolute -top-36 right-0 z-0 hidden select-none lg:block"
            >
              <div class="relative h-[590px] w-[603px]">
                <div
                  class="from-accent-400/20 via-accent-400/0 absolute top-20 right-0 h-[520px] w-[416px] rounded-full bg-gradient-to-t dark:from-accent-600/10 dark:via-accent-600/0"
                >
                  <div
                    class="absolute right-0 bottom-0 overflow-hidden hidden lg:block"
                  >
                    <div style="opacity: 1s">
                      <img
                        format="webp"
                        width="416"
                        height="520"
                        alt="me"
                        :loading="
                          current === 'lg' || current === 'xl'
                            ? 'lazy'
                            : 'eager'
                        "
                        src="/images/me.webp"
                        class="hidden lg:block dark:brightness-[.82] rounded-full"
                        style="color: transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Working Experience -->
      <section class="content-wrapper pt-16">
        <div class="pb-4 md:pb-12">
          <h2
            class="text-center text-2xl font-bold text-foreground md:text-4xl lg:text-6xl"
          >
            Working Experience
          </h2>
        </div>
        <div>
          <ul class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-6">
              <span
                class="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
              ><img
                class="size-3.5 text-blue-800 dark:text-blue-300"
                loading="lazy"
                src="/svg/suitcase.svg"
                alt="suitcase"
              /></span>
              <p
                class="mb-1 flex flex-wrap items-center text-base md:text-lg font-semibold text-gray-700 dark:text-white"
                style="font-display: swap"
              >
                Analyst, Engineer at NAB Innovation Centre Vietnam
              </p>
              <p
                class="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                12/2024 - now
              </p>
            </li>
            <li class="mb-10 ms-6">
              <span
                class="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
              >
                <img
                  class="size-3.5 text-blue-800 dark:text-blue-300"
                  loading="lazy"
                  src="/svg/suitcase.svg"
                  alt="suitcase"
              /></span>
              <p
                class="mb-1 flex flex-wrap items-center text-base md:text-lg font-semibold text-gray-700 dark:text-white"
                style="font-display: swap"
              >
                <span>Senior Software Engineer at Fpt Software</span>
              </p>
              <p
                class="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                04/2024 - 12/2024
              </p>
              <p class="mb-3 text-sm">
                <span>Create structure project, develop and deploy</span>
                <span> features within an agile using Java, Spring.</span>
              </p>
              <div class="mt-2 flex flex-wrap">
                <!-- Java SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    target="_blank"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="java"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/java-logo-svgrepo-com.svg"
                        alt="java"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Spring SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/spring-icon-svgrepo-com.svg"
                        alt="spring"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- VueJS SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/vuejs.svg"
                        alt="vuejs"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- MySQL SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/mysql-svgrepo-com.svg"
                        alt="mysql"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Kafka SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/kafka-svgrepo-com.svg"
                        alt="kafka"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Docker SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/docker-svgrepo-com.svg"
                        alt="docker"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- DrawIO SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/drawio-svgrepo-com.svg"
                        alt="drawio"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Jenkins SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/jenkins-svgrepo-com.svg"
                        alt="jenkins"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Jira SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.atlassian.com/"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/jira.svg"
                        alt="jira"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Git SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/git.svg"
                        alt="git"
                      /></div
                  ></NuxtLink>
                </div>
                <!--Postman SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.postman.com/"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/postman.svg"
                        alt="Postman"
                      /></div
                  ></NuxtLink>
                </div>
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span
                class="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
                ><img
                  class="size-3.5 text-blue-800 dark:text-blue-300"
                  loading="lazy"
                  src="/svg/suitcase.svg"
                  alt="suitcase"
              /></span>
              <p
                class="mb-1 flex flex-wrap items-center text-base md:text-lg font-semibold text-gray-700 dark:text-white"
                style="font-display: swap"
              >
                <span>Backend Team Leader at TopRate</span>
              </p>
              <p
                class="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                02/2023 - 03/2024
              </p>
              <p class="mb-3 text-sm">
                <span>Build a microservices system from scratch</span>
                <span> using Agile, Java, and Spring.</span>
              </p>
              <div class="mt-2 flex flex-wrap">
                <!-- Java SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    target="_blank"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="java"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/java-logo-svgrepo-com.svg"
                        alt="java"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Spring SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/spring-icon-svgrepo-com.svg"
                        alt="spring"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- VueJS SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/vuejs.svg"
                        alt="vuejs"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- PostGres SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/postgresql-svgrepo-com.svg"
                        alt="mysql"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Kafka SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/kafka-svgrepo-com.svg"
                        alt="kafka"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Elastic SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/elastic-svgrepo-com.svg"
                        alt="elastic"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Firebase SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/firebase.svg"
                        alt="firebase"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- K8s SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/kubernetes-svgrepo-com.svg"
                        alt="kubernetes"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- KongA SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/kong-svgrepo-com.svg"
                        alt="konga"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- DrawIO SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/drawio-svgrepo-com.svg"
                        alt="drawio"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Docker SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/docker-svgrepo-com.svg"
                        alt="docker"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- GitlabCI SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/gitlab-svgrepo-com.svg"
                        alt="gitlab"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Jira SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.atlassian.com/"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/jira.svg"
                        alt="jira"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Grafana SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/grafana-svgrepo-com.svg"
                        alt="grafana"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Git SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/git.svg"
                        alt="git"
                      /></div
                  ></NuxtLink>
                </div>
                <!--Postman SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.postman.com/"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/postman.svg"
                        alt="Postman"
                      /></div
                  ></NuxtLink>
                </div>
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span
                class="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
                ><img
                  class="size-3.5 text-blue-800 dark:text-blue-300"
                  loading="lazy"
                  src="/svg/suitcase.svg"
                  alt="suitcase"
              /></span>
              <p
                class="mb-1 flex flex-wrap items-center text-base md:text-lg font-semibold text-gray-700 dark:text-white"
                style="font-display: swap"
              >
                <span>Java Developer at Synergix Technologies Pte Ltd</span>
              </p>
              <p
                class="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                04/2021 - 02/2023
              </p>
              <p class="mb-3 text-sm">
                <span>Build an ERP system using Java2EE</span>
              </p>
              <div class="mt-2 flex flex-wrap">
                <!-- Java SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    target="_blank"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="java"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/java-logo-svgrepo-com.svg"
                        alt="java"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- PostGres SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/postgresql-svgrepo-com.svg"
                        alt="mysql"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- DrawIO SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/drawio-svgrepo-com.svg"
                        alt="drawio"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- TortoiseSVN SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/tortoisesvn.svg"
                        alt="gitlab"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Jenkins SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    target="_blank"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="java"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/jenkins-svgrepo-com.svg"
                        alt="jenkins"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Jira SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.atlassian.com/"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/jira.svg"
                        alt="jira"
                      /></div
                  ></NuxtLink>
                </div>
                <!--Postman SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.postman.com/"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/postman.svg"
                        alt="Postman"
                      /></div
                  ></NuxtLink>
                </div>
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span
                class="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
                ><img
                  class="size-3.5 text-blue-800 dark:text-blue-300"
                  loading="lazy"
                  src="/svg/suitcase.svg"
                  alt="suitcase"
              /></span>
              <p
                class="mb-1 flex flex-wrap items-center text-base md:text-lg font-semibold text-gray-700 dark:text-white"
                style="font-display: swap"
              >
                <span>Viettel Cyber Security</span>
              </p>
              <p
                class="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                07/2020 - 03/2021
              </p>
              <p class="mb-3 text-sm">
                <span>Learn, learn, and learn ...</span>
              </p>
              <div class="mt-2 flex flex-wrap">
                <!-- Java SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    target="_blank"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="java"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/java-logo-svgrepo-com.svg"
                        alt="java"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Python SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/python-svgrepo-com.svg"
                        alt="python"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Laravel SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/laravel.svg"
                        alt="laravel"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Docker SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/docker-svgrepo-com.svg"
                        alt="docker"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- MongoDB SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/mongodb-svgrepo-com.svg"
                        alt="mongodb"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- BurpSuite SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="#"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/burpsuite-security-software-svgrepo-com.svg"
                        alt="burpsuite"
                      /></div
                  ></NuxtLink>
                </div>
                <!--Postman SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.postman.com/"
                    alt="Nguyễn Hồng Cường - Blog's của tôi"
                    name="Nguyễn Hồng Cường - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/postman.svg"
                        alt="Postman"
                      /></div
                  ></NuxtLink>
                </div>
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span
                class="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
                ><img
                  class="size-3.5 text-blue-800 dark:text-blue-300"
                  loading="lazy"
                  src="/svg/graduation.svg"
                  alt="adobephotoshop"
              /></span>
              <p
                class="mb-1 flex items-center text-base md:text-lg font-semibold text-gray-700 dark:text-white"
              >
                Posts and Telecommunications Institute of Technology - Hanoi
              </p>
              <p
                class="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                08/2016 - 12/2021
              </p>
              <p class="mb-3 text-sm">
                Graduated with a degree in Information Technology
              </p>
            </li>
          </ul>
        </div>
      </section>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
