import { Pipe, PipeTransform } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Pipe({
  name: 'imagePreview'
})
export class ImagePreviewPipe implements PipeTransform {
  constructor(private storage: AngularFireStorage) {
  }

  async transform(value: string): Promise<string> {
    return this.storage.ref(value).getDownloadURL().toPromise();
  }
}
