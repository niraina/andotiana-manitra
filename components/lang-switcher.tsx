/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {useRouter, usePathname} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {useLocale} from 'next-intl';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLocale = (locale: string) => {
    const segments: any = pathname.split('/').filter(Boolean);
    if (routing.locales.includes(segments[0])) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }

    const newPath = '/' + segments.join('/');
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center">
          <Button variant="outline" className="capitalize px-2.5">
            {currentLocale}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((locale) => (
          <DropdownMenuItem key={locale} onClick={() => changeLocale(locale)} className="capitalize">
            {locale}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};