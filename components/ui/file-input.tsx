"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface FileInputProps extends Omit<React.ComponentProps<"input">, "type"> {
  onFileSelect?: (file: File | null) => void
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, onFileSelect, onChange, ...props }, ref) => {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => fileInputRef.current!)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null
      setSelectedFile(file)
      onFileSelect?.(file)
      onChange?.(event)
    }

    const handleButtonClick = () => {
      fileInputRef.current?.click()
    }

    return (
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          className="sr-only"
          onChange={handleFileChange}
          {...props}
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className={cn(
            "flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
            className
          )}
        >
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            {selectedFile ? (
              <span className="truncate text-left">{selectedFile.name}</span>
            ) : (
              <span className="text-muted-foreground">Choose file</span>
            )}
          </span>
          <svg
            className="h-4 w-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    )
  }
)

FileInput.displayName = "FileInput"

export { FileInput }
