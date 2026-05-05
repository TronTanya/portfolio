# Портфолио — Тронь Татьяна

Одностраничный многораздельный сайт на Next.js: проекты, кейсы, конкурсы, курсы, образование, наставничество и контакты. Контент вынесен в типизированные файлы в `data/` и `lib/`.

## Стек

- **Next.js** 16 (App Router), **React** 19  
- **TypeScript**  
- **Tailwind CSS** 4  
- **Geist** (Google Fonts через `next/font`)  
- **lucide-react**, **framer-motion** (лёгкие анимации с учётом `prefers-reduced-motion`)  
- **@base-ui/react** (кнопки)

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Сборка и прод-сервер:

```bash
npm run build
npm start
```

Линт:

```bash
npm run lint
```

## Структура страниц

| Маршрут | Содержание |
|--------|------------|
| `/` | Главная: герой, статистика, направления |
| `/about` | Обо мне |
| `/projects` | Список проектов |
| `/projects/drivee-analytics` | Кейс Drivee Analytics Notebook |
| `/competitions` | Конкурсы и хакатоны |
| `/courses` | Курсы и сертификаты |
| `/education` | Образование |
| `/students` | Наставничество студентов |
| `/contact` | Контакты и форма (пока без backend) |

Кастомная **404** — `app/not-found.tsx` (стиль сайта).

## Как редактировать данные

- **`lib/site.ts`** — имя, подзаголовок, SEO title/description по умолчанию, **URL сайта** (`url` — замените перед деплоем), **логотип** (`logoUrl`, файл в `public/assets/logo/`, favicon в `app/layout.tsx`), ссылки в футере (GitHub, LinkedIn, email), путь к **резюме** (`resumeUrl`, файл в `public/`).  
- **`lib/seo.ts`** — хелпер `pageMetadata` для страниц; главная использует `homeMetadata`.  
- **`data/contact.ts`** — intro, каналы связи, темы для блока «по вопросам».  
- **`data/projects.ts`**, **`data/competitions.ts`**, **`data/courses.ts`**, **`data/education.ts`**, **`data/studentAchievements.ts`**, **`data/drivee-case-study.ts`** — соответствующие разделы.  
- **`data/glassAssets.ts`** — каталог 3D glass-ассетов (пути к файлам в `public/assets/3d/glass/`, см. раздел ниже).  
- **`lib/about-content.ts`**, **`lib/home-hero.ts`** — текст главной и страницы «Обо мне».

После правок данных перезапуск `npm run dev` не обязателен — HMR подхватит изменения.

## 3D Glass Assets

Декоративные и hero-медиа (стеклянные абстракции) подключаются через **`data/glassAssets.ts`** и компонент **`Glass3DAsset`**. Глобальные переключатели (включение слоя, видео, mobile-декор, лимит видео на страницу) задаются в **`config/visuals.ts`**; логика чтения флагов — в **`lib/glassVisualPolicy.ts`** и **`lib/glassVideoBudget.ts`** (не дублируйте условия в UI).

### 1. Где лежат файлы

Создайте при необходимости каталоги и положите туда свои файлы (имена в `glassAssets` должны совпадать с реальными путями):

- **`public/assets/3d/glass/videos/`** — короткие зацикленные ролики (например `.mp4`).
- **`public/assets/3d/glass/images/`** — статичные кадры (`.webp`, `.png`).
- **`public/assets/3d/glass/posters/`** — постеры для видео до воспроизведения и как fallback на mobile / при `prefers-reduced-motion` (`.webp` или `.png`).

Пути в коде всегда от корня сайта: `/assets/3d/glass/...`.

### 2. Как добавить новый asset

1. Скопируйте файл в нужную папку из списка выше.
2. Откройте **`data/glassAssets.ts`** и добавьте объект в массив **`glassAssets`**.
3. Заполните поля (см. тип **`GlassAsset`** в том же файле):
   - **`id`** — уникальный строковый идентификатор (используется в хелперах и при отладке).
   - **`type`** — `"video"` или `"image"`.
   - **`src`** — URL файла (для видео — путь к `.mp4` в `videos/`).
   - **`poster`** — для **`type: "video"`** обязателен: путь к картинке в `posters/` (или совместимый статичный кадр).
   - **`alt`** — описание для доступности; для чисто декоративных вставок в UI часто используется **`Glass3DAsset`** с **`decorative`** (пустой alt и `aria-hidden` на оболочке).
   - **`category`** — `hero` | `project` | `background` | `decor` (влияет на выбор ассета по странице/секции).
   - **`page`** — `home` | `about` | `projects` | `drivee` | `students` | `global` (или как расширите тип).
   - **`priority`** — для сортировки при выборе «главного» ассета в категории.

При необходимости добавьте экспорт-хелпер в конце **`glassAssets.ts`** (по аналогии с `defaultHeroGlassAsset`, `projectsPageHeaderGlassAsset`).

### 3. Как использовать в компоненте

Импорт:

```tsx
import { Glass3DAsset } from "@/components/3d/Glass3DAsset"
```

Минимальный пример для **картинки**:

```tsx
<Glass3DAsset
  type="image"
  src="/assets/3d/glass/images/example.webp"
  alt="Краткое описание"
/>
```

Для **видео** всегда указывайте **`poster`** (и при необходимости **`reducedMotionFallback`** — тот же путь, что у постера):

```tsx
<Glass3DAsset
  type="video"
  src="/assets/3d/glass/videos/example.mp4"
  poster="/assets/3d/glass/posters/example.webp"
  alt="Описание сцены"
  decorative
/>
```

Дополнительные пропсы: **`sizes`**, **`priority`**, **`size`** (`default` | `compact` | `hero`), **`shellClassName`**, **`className`**. Декоративные слоты на страницах проектов часто идут через **`GlassImageDecorSlot`** (HEAD-проверка доступности файла).

Если **`config/visuals.ts` → `enable3DAssets: false`**, **`Glass3DAsset`** ничего не рендерит — сайт должен оставаться рабочим за счёт fallback-разметки на уровне страниц (например **`GlassHeroScene`** на главной).

### 4. Как отключить 3D

Отредактируйте **`config/visuals.ts`** (`visualConfig`):

| Флаг | Назначение |
|------|------------|
| **`enable3DAssets`** | Полностью отключает glass-слой (медиа не монтируются). |
| **`enableVideo3D`** | Только постер / статика, без autoplay-`<video>`. |
| **`enableMobile3D`** | На узком вьюпорте скрываются **декоративные** вставки; крупный hero может оставаться статикой по текущей политике в коде. |
| **`maxVideosPerPage`** | Лимит одновременных autoplay-видео (сброс при смене маршрута — **`GlassVideoBudgetReset`** в **`app/layout.tsx`**). |
| **`useFallbackIfMissing`** | Мягкий плейсхолдер при ошибке загрузки вместо «жёсткого» сообщения. |

Подробные комментарии — в начале **`config/visuals.ts`**.

### 5. Рекомендации

- **Видео** оставляйте для **hero** или редких акцентов; декор по возможности — **изображения** (меньше CPU и трафика).
- На **mobile** для видео в проекте используется **постер** (без загрузки тяжёлого mp4 на узком экране) — не отключайте постер у видео-ассетов.
- Не больше **одного autoplay-видео на страницу**; лимит закреплён в конфиге и бюджете слотов.
- Для **публичного сайта компании** используйте только ассеты с **коммерческой лицензией**, допускающей такое использование и указание атрибуции, если лицензия требует.
- **Не коммитьте** файлы в репозиторий, если лицензия **запрещает публикацию** в открытом GitHub: держите медиа в приватном хранилище/CDN и подставляйте URL, либо используйте `.gitignore` и документируйте шаг загрузки для CI.

### 6. Performance checklist

- **Постер обязателен** для каждого видео-ассета в каталоге — иначе ассет может быть отброшен нормализацией (**`lib/getAsset.ts`**) и политикой **`Glass3DAsset`**.
- У `<video>` в коде: **`preload="metadata"`**, **`muted`**, **`playsInline`**, **`loop`**, autoplay только при выполнении всех условий политики.
- Изображения: **`loading="lazy"`** по умолчанию; **`priority`** — только осознанно (LCP), декор без приоритета.
- Поддержка **`prefers-reduced-motion`**: видео не автозапускается, показывается постер (**`hooks/useReducedMotion.ts`** + логика в **`Glass3DAsset`** / **`GlassAssetMedia`**).

## Важно перед публикацией

1. В **`lib/site.ts`** задайте реальный **`url`** (для `metadataBase`, canonical и Open Graph).  
2. Положите актуальный PDF в **`public/resume.pdf`** (или поменяйте `resumeUrl`).  
3. Обновите **email**, **Telegram**, **LinkedIn** в `data/contact.ts` и **`siteConfig.links`**.  
4. При необходимости подключите отправку формы на `/contact` (см. комментарий в `components/contact/ContactForm.tsx`).
