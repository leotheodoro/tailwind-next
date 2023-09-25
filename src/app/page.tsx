import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { InputControl, InputPrefix, InputRoot } from './components/Input'
import { SettingsTabs } from './components/SettingsTabs'
import * as FileInput from './components/Form/FileInput'
import { Select } from './components/Form/Select'
import { SelectItem } from './components/Form/Select/SelectItem'
import { TextArea } from './components/Form/TextArea'
import { Button } from './components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Leonardo" />
              </InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  Last name
                </label>

                <InputRoot>
                  <InputControl id="lastName" defaultValue="Theodoro" />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="font-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="email" defaultValue="example@email.com" />
            </InputRoot>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="font-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="role" className="font-sm font-medium text-zinc-700">
              Role
            </label>
            <InputRoot>
              <InputControl id="role" defaultValue="CTO" />
            </InputRoot>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="font-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States of America" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="font-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="pst"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="am" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="bio" className="font-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue="Hi there! I'm a seasoned software developer with over seven years of experience, hailing from Bauru, São Paulo, Brazil. My journey into the tech world started when I was just 15, and ever since then, programming has been an integral part of my life."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="projects"
              className="font-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
