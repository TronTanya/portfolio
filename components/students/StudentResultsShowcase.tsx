"use client"

import { studentResultsShowcase } from "@/data/studentAchievements"

import { DocumentShowcase } from "./DocumentShowcase"

export function StudentResultsShowcase() {
  return <DocumentShowcase content={studentResultsShowcase} />
}
